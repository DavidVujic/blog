using System.ComponentModel.DataAnnotations;
using DynamicForms.Business.Validators;

namespace DynamicForms.Models.ViewModels
{
	public class MyFormData
	{
		public User User { get; set; }

		public MyFormData()
		{
			User = new User();
		}
	}

	public class User
	{
		[RegularExpression(FirstNameValidator.Regexp)]
		public string FirstName { get; set; }

		public int Age { get; set; }
	}
}