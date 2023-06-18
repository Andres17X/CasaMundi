using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CasaMundi.Domain
{
    [Table("usuarios")]
    public class Usuario
    {
        [Key]
        public int id_usuario { get; set; }
        public string nombre_usuario { get; set; }
        public string password { get; set; }
        public string mail { get; set; }
    }
}