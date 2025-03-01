'use client'

import { useMatchStore } from '@/app/store/useMatchStore'
import Image from 'next/image'
import errorIcon from '@/public/images/error.svg'
import refresh from '@/public/images/refresh.svg'

export default function Header() {
	const { fetchMatches, error } = useMatchStore()

	return (
		<header className="flex flex-col md:flex-row items-center justify-between p-4 text-white">
			<h1 className="text-[32px] font-bold italic text-white text-center md:text-left">
				Match Tracker
			</h1>

			{error && (
				<div className="flex items-center bg-[#16191D] text-white px-4 py-2 rounded-md space-x-2 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-start">
					<Image src={errorIcon} alt="Error Icon" width={16} height={16} />
					<span>{error}</span>
				</div>
			)}

			<button
				className="flex items-center bg-red-500 px-5 py-2 rounded hover:bg-red-600 space-x-2 w-full md:w-auto mt-2 md:mt-0 justify-center"
				onClick={fetchMatches}
			>
				<span className="text-sm font-semibold">Обновить</span>
				<Image src={refresh} alt="Refresh Icon" width={24} height={24} />
			</button>
		</header>
	)
}
