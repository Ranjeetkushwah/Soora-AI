
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    TextField,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Edit, Save, Cancel } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        fullName: 'Ranjeet Kushwah',
        emailId: 'R.kushwah@braininventory.com',
        mobileNumber: '+91 9479561840'
    });
    const [editedProfile, setEditedProfile] = useState(profile);
      const navigate = useNavigate();

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedProfile(profile);
    };

    const handleSave = () => {
        setProfile(editedProfile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedProfile(profile);
        setIsEditing(false);
    };

    const handleInputChange = (field, value) => {
        setEditedProfile(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <Box sx={{ bgcolor: '#E6E6E6', maxWidth: 1200, ml: "auto", p: 2 }}>
            <Card sx={{ bgcolor: "white" }} >
                <CardHeader
                    sx={{
                        backgroundColor: '#305791',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    avatar={
                        <IconButton sx={{ color: 'white' }} onClick={()=>{navigate(-1)}}>
                            <ArrowBackIcon />
                        </IconButton>
                    }
                    title={
                        <Typography variant="h6" component="h2">
                            Your Profile
                        </Typography>
                    }
                />
                <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Full Name */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ minWidth: 120, fontWeight: 500 }}>
                                Full Name
                            </Typography>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    value={editedProfile.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    sx={{ ml: 2 }}
                                    size="small"
                                />
                            ) : (
                                <Typography variant="body1" sx={{ ml: 2, color: '#1F3A63', flex: 1, fontWeight: "bold" }}>
                                    {profile.fullName}
                                </Typography>
                            )}
                        </Box>

                        {/* Email ID */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ minWidth: 120, fontWeight: 500 }}>
                                Email ID
                            </Typography>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    type="email"
                                    value={editedProfile.emailId}
                                    onChange={(e) => handleInputChange('emailId', e.target.value)}
                                    sx={{ ml: 2 }}
                                    size="small"
                                />
                            ) : (
                                <Typography variant="body1" sx={{ ml: 2, color: '#1F3A63', flex: 1, fontWeight: "bold" }}>
                                    {profile.emailId}
                                </Typography>
                            )}
                        </Box>

                        {/* Mobile Number */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ minWidth: 120, fontWeight: 500 }}>
                                Mobile Number
                            </Typography>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    value={editedProfile.mobileNumber}
                                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                                    sx={{ ml: 2 }}
                                    size="small"
                                />
                            ) : (
                                <Typography variant="body1" sx={{ ml: 2, color: '#1F3A63', flex: 1, fontWeight: "bold" }}>
                                    {profile.mobileNumber}
                                </Typography>
                            )}
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2, gap: 1 }}>
                            {isEditing ? (
                                <>
                                    <Button
                                        variant="contained"
                                        startIcon={<Save />}
                                        onClick={handleSave}
                                        sx={{ backgroundColor: '#1F3A63', width: "500px" }}
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        startIcon={<Cancel />}
                                        onClick={handleCancel}
                                        sx={{ color: '#1F3A63', borderColor: "#1F3A63", width: "500px" }}
                                    >
                                        Cancel
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    variant="outlined"
                                    startIcon={<Edit />}
                                    onClick={handleEditClick}
                                    sx={{ width: 1200, color: '#1F3A63', borderColor: "#1F3A63" }}
                                >
                                    Edit Profile
                                </Button>
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>


                
        </Box>
    );
};

export default Profile;