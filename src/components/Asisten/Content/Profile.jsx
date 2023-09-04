export default function Profile() {
    return (
        <div className="flex flex-col w-full shadow-md bg-white rounded-lg p-4 gap-4 sm:px-6">
            <h1 className="text-lg text-center">Profile</h1>
            <img
                src="src\assets\3d_avatar_20.png"
                alt="picture-profile"
                width="100" // Set the desired width
                height="100" // Set the desired height
                className="mx-auto" // Add this class to center the image horizontally
            />
            <div className="font-normal text-sm">
                <div className="flex flex-col">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className=" border rounded border-gray-400"
                        // placeholder="Enter first name"
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className=" border rounded border-gray-400"
                        // placeholder="Enter last name"
                    />
                </div>
                <a className="p-2 bg-[#4DD7BE] text-white text-[10px] sm:text-sm rounded font-semibold shadow-md hover:shadow-none text-center">Submit</a>
            </div>
        </div>
    );
}
