using System;
using EPiServer.Core;
using EPiServer.DataAbstraction;

namespace DynamicForms.Business.Helpers
{
	public static class CategoryHelper
	{
		public const string Field = "Field";
		public const string Group = "Group";
		public const string Behaviour = "Behaviour";

		public static CategoryList GetCategoriesFor(BlockData block)
		{
			return ((ICategorizable)block).Category;
		}

		public static Category FindParentOf(int categoryId)
		{
			return Category.Find(categoryId).Parent;
		}

		public static bool IsField(int categoryId)
		{
			return Equals(categoryId, Field);
		}

		public static bool IsGroup(int categoryId)
		{
			return Equals(categoryId, Group);
		}

		public static bool IsBehaviour(int categoryId)
		{
			return Equals(categoryId, Behaviour);
		}

		private static bool Equals(int categoryId, string name)
		{
			var parent = FindParentOf(categoryId);

			return parent.Name.Equals(name, StringComparison.InvariantCultureIgnoreCase);
		}
	}
}