import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './config';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

export default function ContactFormList() {
    const [contactForms, setContactForms] = useState([]);
    const [filteredForms, setFilteredForms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContactForms = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/contact/`);
                if (response.status === 200) {
                    setContactForms(response.data);
                    setFilteredForms(response.data);
                } else {
                    alert('Failed to fetch contact forms.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        };

        fetchContactForms();
    }, []);

    useEffect(() => {
        const filtered = contactForms.filter((form) =>
            form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
            form.message.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredForms(filtered);
    }, [searchTerm, contactForms]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Form Submissions</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {filteredForms.length > 0 ? (
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200">Name</th>
                            <th className="py-2 px-4 border-b border-gray-200">Email</th>
                            <th className="py-2 px-4 border-b border-gray-200">Subject</th>
                            <th className="py-2 px-4 border-b border-gray-200">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredForms.map((form) => (
                            <tr key={form.id}>
                                <td className="py-2 px-4 border-b border-gray-200">{form.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{form.email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{form.subject}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{form.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No contact forms submitted yet.</div>
            )}
        </div>
    );
}
