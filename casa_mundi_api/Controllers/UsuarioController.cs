using Application;
using CasaMundi.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace casa_mundi_api.Controllers
{
    [Route("/usuarioController")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;
        public UsuarioController(IUsuarioService service) {
            this.usuarioService = service;
        
                }

        [HttpGet("getUsuarios")]
        public ActionResult<List<Usuario>> GetUsuarios() {
            var moviesFromService = usuarioService.GetUsuarios();
            return Ok(moviesFromService);

        }

        [HttpPost("createUsuario")]
        public ActionResult <Usuario> createUsuario(Usuario usuario)
        {

            var movie = usuarioService.CreateUsuario(usuario);
            return Ok(movie);

        }

    }
}
