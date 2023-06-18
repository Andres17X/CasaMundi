using CasaMundi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public interface IUsuarioService
    {
        List<Usuario> GetUsuarios();
        Usuario CreateUsuario(Usuario usuario);
    }
}
