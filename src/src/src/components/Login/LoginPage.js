import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../configData';

const LoginPage = ({ token, setToken }) => {
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const login = async (formData)=>{
        try {
            const response = await axios.post(`${baseURL}/login`, formData);
            if (response.status === 200) {
                alert('You have Logined successfully');
                navigate('/');
                localStorage.setItem('token', response?.data?.Token);
            } else {
                console.log("res", response);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        } 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formData;

        if (!username.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required',
            }));
            return;
        }
        if (!password.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required',
            }));
            return;
        }
        login(formData);
    };

    return (
        <Grid container justifyContent="center"  style={{marginTop:'50px'}}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Card elevation={4} style={{ backgroundColor: '#333', color: '#fff', borderRadius: '20px',boxShadow:'3px 3px 10px blue'  }}>
                    <CardContent style={{ padding: '2rem' }}>
                        <Typography gutterBottom style={{ marginBottom: '1rem',fontSize:'2rem' }}>
                          User Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="username"
                                placeholder='Username'
                                value={formData.username}
                                onChange={handleChange}
                                error={Boolean(errors.username)}
                                helperText={errors.username}
                                InputProps={{ style: { color: 'white', backgroundColor: 'black' } }}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="password"
                                placeholder='Password'
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                                InputProps={{ style: { color: 'white', backgroundColor: 'black' } }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                style={{ marginTop: '1rem' }}
                            >
                                Login
                            </Button>
                        </form>
                        {/* <Link to={'/register'}   >
                            <Typography style={{ marginTop: '1rem', textAlign: 'center', color: 'white', textDecoration: 'none' }}>Create new account</Typography>
                        </Link> */}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
