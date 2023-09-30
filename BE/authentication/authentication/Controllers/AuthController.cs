using authentication.DTOs;
using authentication.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthApiController : ControllerBase
    {
        private readonly AuthDbContext _db;

        public AuthApiController(AuthDbContext dbContext)
        {
            _db = dbContext;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Api called");
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(string Email, string Password)
        {
            if (!ModelState.IsValid)
            {
                var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == Email && u.Password == Password);

                if (user != null)
                {
                    return Ok(new { status = 200, userId = user.Id });
                }
                else
                {
                    return Unauthorized(new { status = 404 });
                }
            }
            else
            {
                return BadRequest(new { status = 400 }); // Thay đổi mã trạng thái thành 400 cho yêu cầu không hợp lệ
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(CreateUserDto user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newUser = new User
            {
                Username = user.Username,
                Email = user.Email,
                Password = user.Password,
            };

            await _db.AddAsync(newUser);
            await _db.SaveChangesAsync();

            return Ok(new { status = 200, userId = newUser.Id });
        }

        [HttpPost("photo")]
        public async Task<IActionResult> UploadPhotos([FromForm] List<IFormFile> Images, [FromForm] int userId)
        {
            if (Images == null || Images.Count == 0)
            {
                return BadRequest("Yêu cầu ít nhất một tệp hình ảnh.");
            }

            try
            {

                var imagePaths = new List<string>();
                foreach (var image in Images)
                {
                    if (image.Length == 0)
                    {
                        continue;
                    }

                    var fileName = Path.GetFileName(image.FileName);
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                    var filePath = Path.Combine("wwwroot", "Uploads", uniqueFileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await image.CopyToAsync(stream);
                    }
                    imagePaths.Add(Path.Combine("https://localhost:7195/Uploads", uniqueFileName));
                }

                var photo = new Photo
                {
                    Image = string.Join(",", imagePaths),
                    UserId = userId,
                    PhotoId = userId
                };

                _db.Photos.Add(photo);
                await _db.SaveChangesAsync();

                return Ok(new { status = 200, UserId = userId });

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Lỗi máy chủ nội bộ: " + ex.Message);
            }
        }

        [HttpPost("relationship")]
        public async Task<IActionResult> Relationship([FromForm] List<string> relationships, [FromForm] int userId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {

                var newRelationship = new Relationship
                {
                    RelationshipType = string.Join(",", relationships),
                    UserId = userId,
                    PhotoId = userId
                };

                _db.Relationships.Add(newRelationship);
                await _db.SaveChangesAsync();

                return Ok(new { status = 200 });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Có lỗi xảy ra khi lưu vào cơ sở dữ liệu.", chiTiet = ex.Message });
            }
        }
        [HttpGet("getimage/{id}")]
        public IActionResult GetImage(int id)
        {
            var getImage = _db.Users.FirstOrDefault(u => u.Id == id);

            if (getImage == null)
            {
                return NotFound();
            }

            return Ok(getImage);
        }

    }
}
