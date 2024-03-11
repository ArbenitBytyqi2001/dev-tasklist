import React from "react";
import Link from "next/link";

const BackButton = () => {
    return (
        <div className="flex justify-start">
            <Link href="/">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default BackButton;
