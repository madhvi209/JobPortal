import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ProfilePopover } from '../ProfilePopover';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { authUser } = useSelector((store) => store.auth);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = () => setMobileOpen(!mobileOpen);

    return (
        <div className="bg-white shadow-sm">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold">
                        Job<span className="text-[#F83002]">Hunt</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        {authUser && authUser.role === "recruiter" ? (
                            <>
                                <li className="hover:text-[#6A38C2] cursor-pointer">
                                    <Link to="/admin/companies">Companies</Link>
                                </li>
                                <li className="hover:text-[#6A38C2] cursor-pointer">
                                    <Link to="/admin/jobs">Jobs</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="hover:text-[#6A38C2] cursor-pointer">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="hover:text-[#6A38C2] cursor-pointer">
                                    <Link to="/jobs">Jobs</Link>
                                </li>
                                <li className="hover:text-[#6A38C2] cursor-pointer">
                                    <Link to="/browse">Browse</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {!authUser ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#6A38C2] hover:bg-[#5f32ad]">Signup</Button>
                            </Link>
                        </div>
                    ) : (
                        <ProfilePopover />
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t shadow-md py-4 px-6 animate-slide-down">

                    <ul className="flex flex-col gap-4 text-lg font-medium">
                        {authUser && authUser.role === "recruiter" ? (
                            <>
                                <li onClick={toggleMenu}>
                                    <Link className="hover:text-[#6A38C2]" to="/admin/companies">
                                        Companies
                                    </Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link className="hover:text-[#6A38C2]" to="/admin/jobs">
                                        Jobs
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li onClick={toggleMenu}>
                                    <Link className="hover:text-[#6A38C2]" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link className="hover:text-[#6A38C2]" to="/jobs">
                                        Jobs
                                    </Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link className="hover:text-[#6A38C2]" to="/browse">
                                        Browse
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Mobile Buttons */}
                    <div className="mt-6">
                        {!authUser ? (
                            <div className="flex flex-col gap-3">
                                <Link to="/login" onClick={toggleMenu}>
                                    <Button variant="outline" className="w-full">Login</Button>
                                </Link>
                                <Link to="/signup" onClick={toggleMenu}>
                                    <Button className="bg-[#6A38C2] w-full hover:bg-[#5f32ad]">
                                        Signup
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <ProfilePopover />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
