using System.ComponentModel.DataAnnotations.Schema;

namespace Soromaps.Models
{
    [Table("tbUsuario")]
    public class User
    {
            [Column("id")]
            public int Id { get; set; }
            [Column("userName")]
            public string UserName { get; set; }
            [Column("userPassword")]
            public string Password { get; set; }

    }
}
