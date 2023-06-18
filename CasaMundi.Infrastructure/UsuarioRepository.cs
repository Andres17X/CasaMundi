using Application;
using CasaMundi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CasaMundi.Infrastructure
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly UsuarioDbContext _usuarioDbContext;
        public UsuarioRepository(UsuarioDbContext usuarioDbContext) { 
            _usuarioDbContext = usuarioDbContext;   
        }

        public Usuario CreateUsuario(Usuario usuario)
        {
            _usuarioDbContext.Usuarios.Add(usuario);
            _usuarioDbContext.SaveChanges();
            return usuario;
            throw new NotImplementedException();
        }

        public List<Usuario> GetUsuarios()
        {
            return _usuarioDbContext.Usuarios.ToList();
            throw new NotImplementedException();
        }
    }

       
        
    
}
