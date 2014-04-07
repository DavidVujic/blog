using DynamicForms.Models.ViewModels;

namespace DynamicForms.Business.Validators
{
	public class FirstNameValidator : ICustomValidator
	{
		public const string Regexp = @"^[a-zåäöA-ZÅÄÖ\-]+$";

		public string GetRegexp()
		{
			return Regexp;
		}

		public bool IsValid(dynamic model)
		{
			var formData = model as MyFormData;

			if (formData == null)
			{
				return false;
			}

			var firstName = formData.User.FirstName;

			if (string.IsNullOrEmpty(firstName))
			{
				return false;
			}

			return firstName.ToLower().StartsWith("Borat");
		}
	}
}