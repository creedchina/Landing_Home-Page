import { useState } from "react";
import UserForm from "../UserForm/UserForm";

const RequestAppointment = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="request-appointment">
      <button className="btn-primary" onClick={() => setIsOpen(true)}> Request Appoinment
      </button>

        {isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                    <UserForm/>
                </div>
                </div>
        )}

    </div>
  );
};

export default RequestAppointment;