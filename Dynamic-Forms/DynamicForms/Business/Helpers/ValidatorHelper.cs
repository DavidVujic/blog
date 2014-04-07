using DynamicForms.Business.Validators;

namespace DynamicForms.Business.Helpers
{
	public class ValidatorHelper
	{
		public static ICustomValidator GetValidatorFor(string validatorName)
		{
			if (string.IsNullOrEmpty(validatorName))
			{
				return null;
			}

			ICustomValidator validator;

			switch (validatorName.ToLower())
			{
				case "firstname":
					validator = new FirstNameValidator();
					break;
				default:
					validator = null;
					break;

			}

			return validator;
		}
	}
}