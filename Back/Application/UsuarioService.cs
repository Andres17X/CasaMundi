using CasaMundi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            this.usuarioRepository = usuarioRepository;
        }

        public Usuario CreateUsuario(Usuario usuario)
        {
            var returnUsuario = usuarioRepository.CreateUsuario(usuario);
            return returnUsuario;
            throw new NotImplementedException();
        }

        public List<Usuario> GetUsuarios()
        {
            var usuarios = usuarioRepository.GetUsuarios();
            return usuarios;
            throw new NotImplementedException();
        }
    }
}
