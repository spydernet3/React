import React from "react";
import { useSearchParams } from "react-router-dom";
import "./UseSearchParams.css";

const users = [
    {id: 1, name: "Arun Kumar", email: "arun@example.com", city: "Chennai", role: "Developer",},
    {id: 2, name: "Priya Sharma", email: "priya@example.com", city: "Coimbatore", role: "Designer",},
    {id: 3, name: "Rahul Raj", email: "rahul@example.com", city: "Bangalore", role: "Tester",},
    {id: 4, name: "Divya Singh", email: "divya@example.com", city: "Mumbai", role: "Manager",},
    {id: 5, name: "Karthik S", email: "karthik@example.com", city: "Madurai", role: "Developer",},
    {id: 6, name: "Anjali Devi", email: "anjali@example.com", city: "Salem", role: "Designer",},
    {id: 7, name: "Vijay Kumar", email: "vijay@example.com", city: "Trichy", role: "Admin",},
    {id: 8, name: "Sneha R", email: "sneha@example.com", city: "Erode", role: "Developer",},
    {id: 9, name: "Ajay Kumar", email: "ajay@example.com", city: "Hyderabad", role: "Tester",},
    {id: 10, name: "Meena Raj", email: "meena@example.com", city: "Kochi", role: "Manager",},
    {id: 11, name: "Suresh Babu", email: "suresh@example.com", city: "Chennai", role: "Developer",},
    {id: 12, name: "Nisha Patel", email: "nisha@example.com", city: "Pune", role: "Designer",},
    {id: 13, name: "Ravi Shankar", email: "ravi@example.com", city: "Bangalore", role: "Admin",},
    {id: 14, name: "Keerthi M", email: "keerthi@example.com", city: "Coimbatore", role: "Tester",},
    {id: 15, name: "Manoj Kumar", email: "manoj@example.com", city: "Madurai", role: "Developer",},
    {id: 16, name: "Lakshmi P", email: "lakshmi@example.com", city: "Salem", role: "Manager",},
    {id: 17, name: "Gokul R", email: "gokul@example.com", city: "Erode", role: "Developer",},
    {id: 18, name: "Pooja N", email: "pooja@example.com", city: "Mumbai", role: "Designer",},
    {id: 19, name: "Dinesh Kumar", email: "dinesh@example.com", city: "Hyderabad", role: "Tester",},
    {id: 20, name: "Harini S", email: "harini@example.com", city: "Kochi", role: "Admin",},

];

export default function UseSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromURL = Number(searchParams.get("page")) || 1;

  const recordsPerPage = 5;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const currentPage = Math.min(
    Math.max(pageFromURL, 1),
    totalPages
  );

  const startIndex = (currentPage - 1) * recordsPerPage;

  const endIndex = startIndex + recordsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setSearchParams({
      page: String(pageNumber),
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="search-params-page">
      <div className="search-params-container">

        <div className="search-params-header">
          <h1>User Pagination</h1>
          <p>
            Pagination using React Router useSearchParams
          </p>
        </div>

        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>
                    <span className="role-badge">
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">

          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            ← Previous
          </button>

          <div className="page-info">
            <span>Page</span>
            <strong>{currentPage}</strong>
            <span>of</span>
            <strong>{totalPages}</strong>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next →
          </button>

        </div>

      </div>
    </div>
  );
}
