import React,{useState} from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
    
        setFormData({
        ...formData,
        [name]: newValue,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
    };
    return (
        <div className="bg-local h-screen" style={{backgroundImage: "url(src/assets/bg-login.png)"}}>
            
            {/* HEADER */}
            <div className="flex justify-between px-4 sm:px-16 pt-6 pb-4 absolute top-0">
                {/* iSmile Logo */}
                <a href="/" ><img src="src\assets\logo\Vertical.jpg"
                    className="h-12 sm:h-16"
                    alt="iSmile Logo"
                    />
                </a>
            </div>
            
            {/* MAIN */}
            <div className="flex justify-center items-center h-full">
                <div className='w-[400px] h-[360px] bg-white p-5 rounded-lg shadow-md'>
                    <div className='mb-8'>
                        <h1 className='font-bold text-[#2AE1AF] text-2xl mb-2'>Welcome to i-Smile Laboratory 🔍</h1>
                        <p className=' text-xs'>Please login to your account and start the adventure</p>
                    </div>
                    <form className="flex flex-col text-xs gap-1" onSubmit={handleSubmit}>
                        <label className="font-semibold" htmlFor="username">NIM/Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className=" border rounded border-gray-400 p-1"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        <label className="font-semibold" htmlFor="password">Password:</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                className="border rounded border-gray-400 p-1"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        <div className='flex gap-2 my-2'>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="border-gray-400 self-start"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="rememberMe" className="text-gray-700">
                                Remember Me
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#2AE1AF] rounded-lg text-white px-4 py-2 font-bold text-sm text-center"
                        >
                        Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}