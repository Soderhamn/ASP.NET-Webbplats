using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace _1._1_Razor.Pages;

public class RazorModel : PageModel
{
    private readonly ILogger<RazorModel> _logger;

    public RazorModel(ILogger<RazorModel> logger) 
    {
        _logger = logger;
    }

    public void OnGet() 
    {
        
    }
}