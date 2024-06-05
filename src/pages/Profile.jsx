import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Image, Modal, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileUser,updateCustemer,deleteCustemer } from "../redux/slices/custemerLogin";

const Profile = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updateVisible, setupdateVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [updateData, setupdateData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        zipCode: '',
        password: '',
        image: null,
      });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const customerId = user ? user._id : null;
    console.log(customerId)
    

    useEffect(() => {
        dispatch(fetchProfileUser());
    }, [dispatch]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleEdit = async () => {
        if (!customerId) {
            console.error("Customer ID not found");
            return;
        }
    
        try {
            const response = await axios.get(`http://localhost:3001/custemer/${customerId}`);
            const data = response.data;
            setupdateData({
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                country: data.country,
                city: data.city,
                zipCode: data.zipCode,
                password: data.password,
            });
            setupdateVisible(true);
        } catch (error) {
            console.error('Error fetching customer details:', error);
        }
    };

      const handleChangeUpdate = (e) => {
        const { name, value,files } = e.target;
        if (name === 'image') {
          setupdateData({ ...updateData, image: files[0] });
        } else {
          setupdateData({ ...updateData, [name]: value });
        }
        
      }; 
      const handleSubmitUpdate = async (e) =>{
        e.preventDefault();
        const { name, email, phoneNumber, country, city, zipCode, password, image } = updateData;
        const custemer = new FormData();
        custemer.append('name', name);
        custemer.append('email', email);
        custemer.append('phoneNumber', phoneNumber.toString());
        custemer.append('country', country);
        custemer.append('city', city);
        custemer.append('zipCode', zipCode.toString());
        custemer.append('password', password);
        custemer.append('image', image);
        try{
          const success = await dispatch(updateCustemer(customerId,custemer));
    
          if (success) {
            alert('Customer Updated successfully');
            window.location.reload();
            setupdateData({
              name: '',
              email: '',
              phoneNumber: '',
              country: '',
              city: '',
              zipCode: '',
              password: '',
            });
            setVisible(false);
          }
    
        }catch(error){
          console.error('Error updating customer:', error);
    
        }
      }

    const UpdatehandleCancel = () => {
        setupdateVisible(false);
      };

      const handleDeleteConfirm = async () => {
        try {
          const success = await dispatch(deleteCustemer(customerId));
          if (success) {
            alert('Customer deleted successfully');
            // Optionally, you can update the state here if needed
          }
        } catch (error) {
          console.error('Error deleting customer:', error);
        }
        setDeleteVisible(false);
      };
      
      const handleDeleteCancel = () => {
        setDeleteVisible(false);
      };

      const handleDelete = () => {
        setDeleteVisible(true);
      };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl text-center mb-10">Profile</h1>
                {user && (
                    <div className="flex flex-col items-center">
                        <div className="rounded-full border border-gray-300 p-1 overflow-hidden">
                            <img src={user.image.url} alt={user.name} className="object-cover w-40 h-40 rounded-full cursor-pointer" onClick={showModal} />
                        </div>
                        <h1 className="my-4 text-xl">{user.name}</h1>
                        <div className="flex">
                            <Button icon={<EditOutlined />} className="mr-4   text-white" style={{ backgroundColor: 'rgb(5, 2, 85)', color: '#FFFFFF' }} onClick={handleEdit}>Edit Profile</Button>
                            <Button icon={<DeleteOutlined />} className="bg-red-800 text-white"  onClick={handleDelete}>Delete Profile</Button>
                        </div>
                    </div>
                )}
<Modal title="User Image" visible={isModalVisible} onCancel={handleCancel} footer={null}>
    {user && (
        <div className="text-center">
            <Image className="object-cover w-40 h-40 rounded-full cursor-pointer" src={user.image.url} alt={user.name} />
            <div className="text-center p-4">
                <div className="d-flex justify-content-center">
                    <div className="flex-fill">
                        <p><strong>Name:</strong> {user.name}</p>
                    </div>
                    <div className="flex-fill">
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="flex-fill">
                        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    </div>
                    <div className="flex-fill">
                        <p><strong>Country:</strong> {user.country}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="flex-fill">
                        <p><strong>City:</strong> {user.city}</p>
                    </div>
                    <div className="flex-fill">
                        <p><strong>Zip Code:</strong> {user.zipCode}</p>
                    </div>
                </div>
          
            </div>
        </div>
    )}
</Modal>





                <Modal
  title="Edit Informations"
  visible={updateVisible}
  onCancel={UpdatehandleCancel}
  footer={null}
>
  <form onSubmit={handleSubmitUpdate} className="bg-white p-4 mx-auto max-w-md">
    <div className="grid grid-cols-2 gap-4">
      <div className="mb-4">
        <label htmlFor="name" className="text-black">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={updateData.name}
          onChange={handleChangeUpdate}
          className="w-full px-4 py-2 rounded-md border border-black text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="text-black">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={updateData.phoneNumber}
          onChange={handleChangeUpdate}
          className="w-full px-4 py-2 rounded-md border border-black text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="text-black">
          Country:
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={updateData.country}
          onChange={handleChangeUpdate}
          className="w-full px-4 py-2 rounded-md border border-black text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="text-black">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={updateData.city}
          onChange={handleChangeUpdate}
          className="w-full px-4 py-2 rounded-md border border-black text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="text-black">
          Zip Code:
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={updateData.zipCode}
          onChange={handleChangeUpdate}
          className="w-full px-4 py-2 rounded-md border border-black text-black"
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="text-black">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={updateData.email}
        onChange={handleChangeUpdate}
        className="w-full px-4 py-2 rounded-md border border-black text-black"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="text-black">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={updateData.password}
        onChange={handleChangeUpdate}
        className="w-full px-4 py-2 rounded-md border border-black text-black"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="text-black">
        Image:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleChangeUpdate}
        className="w-full px-4 py-2 rounded-md border border-black text-black"
      />
    </div>
    <div className="text-center">
      <button
        type="submit"
        style={{ backgroundColor: 'rgb(5, 2, 85)', color: '#FFFFFF' }}
        className="text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Edit 
      </button>
    </div>
  </form>
</Modal>
<Modal
        title="Confirm Delete"
        visible={deleteVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
>
       <p>Are you sure you want to delete this customer?</p>
      </Modal>

            </div>
        </div>
    );
};

export default Profile;
