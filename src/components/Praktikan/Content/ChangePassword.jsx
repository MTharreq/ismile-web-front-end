export default function ChangePassword() {
    return (
        <div className="flex flex-col w-full shadow-md bg-white rounded-lg p-4 gap-4 sm:px-6">
            <h1 className="text-lg text-center">Change Password</h1>
            <div className="font-normal text-sm">
            <div className="flex flex-col">
                    <label htmlFor="currentPass">Current Password:</label>
                    <input
                        type="text"
                        id="currentPass"
                        name="currentPass"
                        className=" border rounded border-gray-400"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="newPass">New Password:</label>
                    <input
                        type="text"
                        id="newPass"
                        name="newPass"
                        className=" border rounded border-gray-400"
                        placeholder=""
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="lastName">Confirm New Password:</label>
                    <input
                        type="text"
                        id="confirmPass"
                        name="confirmPass"
                        className=" border rounded border-gray-400"
                        placeholder=""
                    />
                </div>
                <a className="p-2 bg-[#4DD7BE] text-white text-[10px] sm:text-sm rounded font-semibold shadow-md hover:shadow-none text-center">Submit</a>
            </div>
        </div>
    );
}
