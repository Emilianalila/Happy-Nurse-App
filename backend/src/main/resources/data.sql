DELETE FROM Nurse;

INSERT INTO Nurse (name, last_name, email, phone_number, license_number, gender, address, price, rating, img) VALUES
                                                                                                               ('Emiliana', 'Escobar Zambrana', 'emi@gmail.com', '727711772', 'RN123456', 'female', '123 Main St, Springfield, IL', 300, '4.5', 'https://i.ibb.co/wQWkCkQ/Image-Editor11.png'),
                                                                                                               ('Jane', 'Smith', 'jane.smith@gmail.com', '555-5678', 'RN654321', 'Female', '456 Oak St, Springfield, IL', 260, '4.8', 'https://i.ibb.co/WgWt543/Image-Editor9.png'),
                                                                                                               ('Mary', 'Johnson', 'mary.johnson@gmail.com', '555-8765', 'RN987654', 'Female', '789 Pine St, Springfield, IL', 255, '4.6', 'https://i.ibb.co/XkLM47T/Image-Editor.jpg'),
                                                                                                               ('James', 'Williams', 'james.williams@gmail.com', '555-4321', 'RN456789', 'Male', '101 Maple St, Springfield, IL', 265, '4.7', 'https://i.ibb.co/9gdSZPd/Image-Editor.jpg'),
                                                                                                               ('Patricia', 'Brown', 'patricia.brown@gmail.com', '555-6789', 'RN123789', 'Female', '202 Birch St, Springfield, IL', 270, '4.9', 'https://i.ibb.co/f4Z3h20/Image-Editor10.jpg'),
                                                                                                               ('Michael', 'Jones', 'michael.jones@gmail.com', '555-7890', 'RN789123', 'Male', '303 Cedar St, Springfield, IL', 245, '4.4', 'https://www.creativefabrica.com/wp-content/uploads/2022/11/25/Handsome-Doctor-Smiling-In-Hospital-48428105-1.png'),
                                                                                                               ('Linda', 'Garcia', 'linda.garcia@gmail.com', '555-8901', 'RN654987', 'Female', '404 Elm St, Springfield, IL', 250, '4.5', 'https://i.ibb.co/hDBgT8b/Image-Editor12.png'),
                                                                                                               ('Robert', 'Martinez', 'robert.martinez@gmail.com', '555-9012', 'RN321654', 'Male', '505 Ash St, Springfield, IL', 255, '4.6', 'https://i.pinimg.com/736x/7f/2b/61/7f2b6179c80e54d3046a4ec8b49a0e75.jpg'),
                                                                                                               ('Elizabeth', 'Rodriguez', 'elizabeth.rodriguez@gmail.com', '555-0123', 'RN987321', 'Female', '606 Hickory St, Springfield, IL', 260, '4.7', 'https://i.ibb.co/ThDVBcB/Image-Editor.jpg'),
                                                                                                               ('David', 'Hernandez', 'david.hernandez@gmail.com', '555-1235', 'RN789654', 'Male', '707 Walnut St, Springfield, IL', 265, '4.8', 'https://i.ibb.co/xMvcnF7/Image-Editor14.jpg');
DELETE FROM UserP;
INSERT INTO UserP (email, role) VALUES
                                    ('emi@gmail.com', 'admin'),
                                    ('maria@gmail.com', 'user')
