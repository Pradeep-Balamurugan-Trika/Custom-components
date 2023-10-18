"use client";

import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export default function MegaMenu() {
	const data = [
		{
			id: 1,
			level: 0,
			parent: -1,
			name: "GARDEN",
			link: "",
		},
		{
			id: 11,
			level: 1,
			parent: 1,
			name: "Animal Statues",
			link: "",
		},
		{
			id: 13,
			level: 2,
			parent: 110,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 136,
			level: 2,
			parent: 13,
			name: "SUB SUBMENU 1............",
			link: "",
		},
		{
			id: 146,
			level: 2,
			parent: 13,
			name: "SUB SUBMENU 2..........",
			type: "LINK",
			link: "",
		},
		{
			id: 14,
			level: 2,
			parent: 110,
			name: "SUB SUBMENU 2",
			type: "LINK",
			link: "",
		},
		{
			id: 136,
			level: 2,
			parent: 14,
			name: "SUB SUBMENU 1.......",
			link: "",
		},
		{
			id: 146,
			level: 2,
			parent: 14,
			name: "SUB SUBMENU 2.....",
			type: "  LINK",
			link: "",
		},
		{
			id: 12,
			level: 1,
			parent: 1,
			name: "Contemporary & Modern Statues",
			link: "",
		},
		{
			id: 15,
			level: 2,
			parent: 12,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 16,
			level: 2,
			parent: 12,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 111,
			level: 1,
			parent: 1,
			name: "Religious Statues",
			link: "",
		},
		{
			id: 131,
			level: 2,
			parent: 111,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 141,
			level: 2,
			parent: 111,
			name: "SUB SUBMENU 2",
			type: "  LINK",
			link: "",
		},
		{
			id: 121,
			level: 1,
			parent: 1,
			name: "Children Statues",
			link: "",
		},
		{
			id: 151,
			level: 2,
			parent: 121,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 161,
			level: 2,
			parent: 121,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 112,
			level: 1,
			parent: 1,
			name: "Asian & Zen Statues ",
			link: "",
		},
		{
			id: 132,
			level: 2,
			parent: 112,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 142,
			level: 2,
			parent: 112,
			name: "SUB SUBMENU 2",
			type: "  LINK",
			link: "",
		},
		{
			id: 122,
			level: 1,
			parent: 1,
			name: "Angel & Cherub Statues",
			link: "",
		},
		{
			id: 152,
			level: 2,
			parent: 122,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 162,
			level: 2,
			parent: 122,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 113,
			level: 1,
			parent: 1,
			name: "Gothic & Medieval",
			link: "",
		},
		{
			id: 133,
			level: 2,
			parent: 113,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 143,
			level: 2,
			parent: 113,
			name: "SUB SUBMENU 2",
			type: "  LINK",
			link: "",
		},
		{
			id: 123,
			level: 1,
			parent: 1,
			name: "Greenman Sculptures",
			link: "",
		},
		{
			id: 153,
			level: 2,
			parent: 123,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 163,
			level: 2,
			parent: 123,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 114,
			level: 1,
			parent: 1,
			name: "Fantasy Statues",
			link: "",
		},
		{
			id: 134,
			level: 2,
			parent: 114,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 144,
			level: 2,
			parent: 114,
			name: "SUB SUBMENU 2",
			type: "  LINK",
			link: "",
		},
		{
			id: 124,
			level: 1,
			parent: 1,
			name: "Bronze Statuary",
			link: "",
		},
		{
			id: 154,
			level: 2,
			parent: 124,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 164,
			level: 2,
			parent: 124,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 2,
			level: 0,
			parent: -1,
			name: "HOME",
			link: "",
		},
		{
			id: 17,
			level: 1,
			parent: 13,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 18,
			level: 2,
			parent: 17,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 19,
			level: 2,
			parent: 17,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 21,
			level: 1,
			parent: 12,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 22,
			level: 2,
			parent: 21,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 23,
			level: 2,
			parent: 21,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 3,
			level: 0,
			parent: -1,
			name: "FURNITURE",
			type: "LINK",
			link: "",
		},
		{
			id: 24,
			level: 1,
			parent: 3,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 25,
			level: 2,
			parent: 24,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 26,
			level: 2,
			parent: 24,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 27,
			level: 1,
			parent: 3,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 28,
			level: 2,
			parent: 27,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 29,
			level: 2,
			parent: 27,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 4,
			level: 0,
			parent: -1,
			name: "THEMES",
			link: "",
		},
		{
			id: 30,
			level: 1,
			parent: 4,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 31,
			level: 2,
			parent: 30,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 32,
			level: 2,
			parent: 30,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 33,
			level: 1,
			parent: 4,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 34,
			level: 2,
			parent: 33,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 35,
			level: 2,
			parent: 33,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 5,
			level: 0,
			parent: -1,
			name: "HOLIDAY & GIFTS",
			link: "",
		},
		{
			id: 36,
			level: 1,
			parent: 5,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 37,
			level: 2,
			parent: 36,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 38,
			level: 2,
			parent: 36,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 39,
			level: 1,
			parent: 5,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 40,
			level: 2,
			parent: 39,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 41,
			level: 2,
			parent: 39,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 6,
			level: 0,
			parent: -1,
			name: "GOTHIC",
			link: "",
		},
		{
			id: 42,
			level: 1,
			parent: 6,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 43,
			level: 2,
			parent: 42,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 44,
			level: 2,
			parent: 42,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 45,
			level: 1,
			parent: 6,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 46,
			level: 2,
			parent: 45,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 47,
			level: 2,
			parent: 45,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 7,
			level: 0,
			parent: -1,
			name: "EGYPTIAN",
			link: "",
		},
		{
			id: 48,
			level: 1,
			parent: 7,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 49,
			level: 2,
			parent: 48,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 50,
			level: 2,
			parent: 48,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 60,
			level: 1,
			parent: 7,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 61,
			level: 2,
			parent: 50,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 62,
			level: 2,
			parent: 50,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 8,
			level: 0,
			parent: -1,
			name: "FRAMED PAINTINGS",
			link: "",
		},
		{
			id: 63,
			level: 1,
			parent: 8,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 64,
			level: 2,
			parent: 63,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 65,
			level: 2,
			parent: 63,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 66,
			level: 1,
			parent: 8,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 67,
			level: 2,
			parent: 66,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 68,
			level: 2,
			parent: 66,
			name: "SUB SUBMENU 2",
			link: "",
		},

		{
			id: 9,
			level: 0,
			parent: -1,
			name: "HALLOWEEN",
			link: "",
		},
		{
			id: 69,
			level: 1,
			parent: 9,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 70,
			level: 2,
			parent: 69,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 71,
			level: 2,
			parent: 69,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 72,
			level: 1,
			parent: 9,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 73,
			level: 2,
			parent: 72,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 74,
			level: 2,
			parent: 72,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 10,
			level: 0,
			parent: -1,
			name: "SALE",
			link: "",
		},
		{
			id: 75,
			level: 1,
			parent: 10,
			name: "SUBMENU 1",
			link: "",
		},
		{
			id: 76,
			level: 2,
			parent: 75,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 77,
			level: 2,
			parent: 75,
			name: "SUB SUBMENU 2",
			link: "",
		},
		{
			id: 78,
			level: 1,
			parent: 10,
			name: "SUBMENU 2",
			link: "",
		},
		{
			id: 79,
			level: 2,
			parent: 78,
			name: "SUB SUBMENU 1",
			link: "",
		},
		{
			id: 80,
			level: 2,
			parent: 78,
			name: "SUB SUBMENU 2",
			link: "",
		},
	];

	const [isMenu, setIsMenu] = useState(false);
	const [menuData, setMenuData] = useState(
		<div className="z-10 w-full h-[20rem] bg-zinc-200 absolute"></div>
	);

	function checkSubMenu(index: number) {
		const temp = data.filter((datum) => {
			if (datum.parent === data[index].id) {
				return datum;
			}
		});
		if (temp.length > 0) {
			return true;
		}
		return false;
	}

	const handleSubMenuData = (index: number, parentIndex: number) => {
		setMenuData((prev) => (
			<div className="z-20 w-full h-[20rem] absolute px-44 py-10 bg-zinc-200">
				<div className="w-1/2 mx-auto">
					<h3
						className="text-sm font-sans font-light cursor-pointer hover:underline-offset-4 hover:underline  w-fit"
						onClick={() => {
							var parentindex = 0;
							data.forEach((datum, i) => {
								if (datum.id === data[parentIndex].parent) {
									parentindex = i;
								}
							});

							data[index].level < 2
								? handleMainMenuData(parentIndex)
								: handleSubMenuData(parentIndex, parentindex);
						}}
					>
						&lt; Go Back
					</h3>
					<h4 className="text-sm font-sans font-bold mt-4 mb-2">
						{data[index].name}{" "}
					</h4>
				</div>
				<div className="flex flex-col w-1/2 p-10 mx-auto pt-5">
					{data.map((datum, i) => {
						if (datum.parent === data[index].id) {
							return checkSubMenu(i) ? (
								<div
									className="text-sm font-sans font-bold hover:decoration-2 w-fit hover:underline-offset-4 hover:underline   hover:cursor-pointer m-2 "
									key={datum.id}
									onClick={() => {
										handleSubMenuData(i, index);
									}}
								>
									<div className="flex gap-1 relative group">
										<div className="group-hover:text-blue-400 h-full">
											{datum.name}
										</div>
										<div className="text-xs group-hover:text-base ">
											<BsChevronRight className="text-zinc-600 mt-1"></BsChevronRight>
										</div>
									</div>
								</div>
							) : (
								<a
									className="text-sm font-sans font-bold hover:text-blue-400 hover:underline-offset-4 hover:underline hover:decoration-2 hover:cursor-pointer p-2"
									key={datum.id}
									href={datum.link}
								>
									{datum.name}
								</a>
							);
						}
					})}
				</div>
			</div>
		));
	};

	const handleMainMenuData = (index: number) => {
		setIsMenu(true);

		setMenuData(
			<div className="z-10 w-full h-[20rem]  absolute bg-zinc-300">
				<div className="grid grid-cols-3  p-10 w-3/4 mx-auto">
					{data.map((datum, i) => {
						if (datum.parent === data[index].id) {
							return checkSubMenu(i) ? (
								<div
									className="text-sm font-sans font-bold hover:decoration-2 w-fit flex gap-1 hover:underline-offset-4 hover:underline   hover:cursor-pointer m-2 "
									key={datum.id}
									onClick={() => {
										handleSubMenuData(i, index);
									}}
								>
									<div className="flex gap-1 relative group">
										<div className="group-hover:text-blue-400 h-full">
											{datum.name}
										</div>
										<div className="text-xs group-hover:text-base">
											<BsChevronRight className="text-zinc-600 mt-1"></BsChevronRight>
										</div>
									</div>
								</div>
							) : (
								<a
									className="text-sm font-sans font-bold hover:text-blue-400 hover:underline-offset-4 hover:underline hover:decoration-2 hover:cursor-pointer p-2"
									key={datum.id}
									href={datum.link}
								>
									{datum.name}
								</a>
							);
						}
					})}
				</div>
			</div>
		);
	};

	return (
		<div
			className="h-10"
			onMouseLeave={() => {
				setIsMenu(false);
			}}
		>
			<div className="bg-white flex justify-center gap-10 mt-10 h-full py-4">
				<div
					className="w-10"
					onMouseEnter={() => {
						setIsMenu(false);
					}}
				></div>
				{data.map(
					(datum, i) =>
						datum.level === 0 &&
						(checkSubMenu(i) ? (
							<h3
								className="text-sm font-sans font-bold hover:underline-offset-4 hover:underline hover:decoration-2 hover:cursor-pointer"
								key={datum.id}
								onMouseEnter={() => {
									handleMainMenuData(i);
								}}
							>
								{datum.name}
							</h3>
						) : (
							<a
								className="text-sm font-sans font-bold hover:underline-offset-4 hover:underline hover:decoration-2 hover:cursor-pointer"
								key={datum.id}
								href={datum.link}
								onMouseEnter={() => {
									setIsMenu(false);
								}}
							>
								{datum.name}
							</a>
						))
				)}
				<div
					className="w-10"
					onMouseEnter={() => {
						setIsMenu(false);
					}}
				></div>
			</div>
			{isMenu && menuData}
		</div>
	);
}
