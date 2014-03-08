using NoScriptFirst.Validation;

namespace NoScriptFirst.Models
{
	public class Person
	{
		[MyRequiredAttributeThatSanitizesStrings]
		public string Name { get; set; }
	}
}