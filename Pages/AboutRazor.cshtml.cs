using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace _1._1_Razor.Pages;

public class AboutRazorModel : PageModel
{
    private readonly ILogger<AboutRazorModel> _logger;

    public AboutRazorModel(ILogger<AboutRazorModel> logger) 
    {
        _logger = logger;
    }

    public void OnGet() 
    {
        
    }
}