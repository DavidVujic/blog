using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace DynamicForms.Models.Pages
{
	[ContentType(DisplayName = "My Standard Page",
		GUID = "1CDD4DBC-D13D-4264-8A6E-029348701A9F",
		Description = "This is a standard page type")]
	public class MyStandardPage : PageData
	{
		[CultureSpecific]
		[Editable(true)]
		[Display(
			Name = "Main body",
			Description = "The main body will be shown in the main content area of the page, using the XHTML-editor you can insert for example text, images and tables.",
			GroupName = SystemTabNames.Content,
			Order = 10)]
		public virtual XhtmlString MainBody { get; set; }

		[CultureSpecific]
		[Editable(true)]
		[Display(
			Name = "An example content area",
			Description = "This is the Main Content Area",
			GroupName = SystemTabNames.Content,
			Order = 20)]
		public virtual ContentArea MainContentArea { get; set; }
	}
}