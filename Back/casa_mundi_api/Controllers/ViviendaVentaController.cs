using Application;
using CasaMundi.Domain;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace casa_mundi_api.Controllers
{
    [Route("/viviendaVentaController")]
    [ApiController]
    public class ViviendaVentaController : ControllerBase
    {
        [HttpGet("getViviendasVenta")]
        public void getViviendasEnVenta()
        {
            Console.WriteLine("Hola");

        }
    }
}
