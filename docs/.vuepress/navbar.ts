import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	"/demo/",
	{
		text: "Guide",
		icon: "lightbulb",
		prefix: "/guide/",
		children: [
			{
				text: "Bar",
				icon: "lightbulb",
				prefix: "bar/",
				children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
			},
			{
				text: "Foo",
				icon: "lightbulb",
				prefix: "foo/",
				children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
			},
		],
	},
	{
		text: "V2 Docs",
		icon: "book",
		link: "https://theme-hope.vuejs.press/",
	},
	{
		text: "Теорія",
		icon: "book",
		prefix: "theory/",
		children: [
			{
				text: "Введення в С#",
				icon: "lightbulb",
				prefix: "theory1/",
				children: [{ text: "Тема 1. Мова C# і платформа .NET", link: "topic1.md" }]
			},
		]
	}
]);
