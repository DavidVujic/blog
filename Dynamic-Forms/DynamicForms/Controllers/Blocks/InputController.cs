using System.Web.Mvc;
using DynamicForms.Models.Blocks;
using EPiServer.Web.Mvc;

namespace DynamicForms.Controllers.Blocks
{
	public class InputController : BlockController<InputBlock>
	{
		public override ActionResult Index(InputBlock currentBlock)
		{
			return PartialView(currentBlock);
		}
		
	}
}
