import React, {useState} from 'react'
import {Button, Container, IconButton, Paper, TextField, Typography, Stack, Avatar} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () =>{
    setIsLogin(!isLogin);
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const maxSize = 2 * 1024 * 1024; // 2MB (in bytes)

    if(file && !file.type.startsWith('image/')){
      alert("Please upload a valid image file.");
      e.target.value ="";
      return;
    }
    
    if (file.size > maxSize) {
      alert("File size exceeds 2MB. Please upload a smaller image.");
      e.target.value = "";
      return;
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file); // This thing helps to show the images on temporary basis. 
      setAvatar(imageUrl); // Set preview image
    }
    
  }

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");   
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  return (
    <div
    style={{
     background: `linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d), 
                 url("https://www.transparenttextures.com/patterns/hexellence.png")`,
     backgroundSize: "cover",
   }}>
    {/* // Container is a Material-UI component that centers its children.
    // "main" is used to specify the HTML element inside is main part of webpage, helps in SEO. */}
    <Container component={"main"} maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      
      {/* // paper is MUI component similar to div with beauty "sx" for styling. */}
      <Paper elevation={3}
        sx={{ 
          padding: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
          }}
      >
        {/* // If isLogin is true, show Login form, else show Register form. */} 
        {/* // Typography helps to style text in consistent manner.  */}
        {isLogin ? (
          <>
            <Typography variant="h4">Login</Typography> 
            <form style={{
              width: '100%', 
              marginTop: '1rem'
            }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  sx={{
                    marginTop:"1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
            </form>

            <Typography mt={"1rem"}>Or</Typography>
            <Button
              variant="text"
              color="secondary"
              fullWidth
              onClick={toggleLogin}
            >
              Sign Up Instead!
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4">Sign Up</Typography> 
            <form style={{
              width: '100%', 
              marginTop: '1rem'
            }}>

              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  src={avatar}
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                    // contain is good for icon/logos
                    // cover is good for profile pictures.
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput 
                      type="file" 
                      accept='image/*'
                      onChange={handleFileChange}
                     />
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                multiline
                minRows={2}
                maxRows={4}
                value={bio} 
                onChange={(e) => setBio(e.target.value)}
                />

              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  sx={{
                    marginTop:"1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
            </form>

            <Typography mt={"1rem"}>Or</Typography>
            <Button
              variant="text"
              color="secondary"
              fullWidth
              onClick={toggleLogin}
            >
              Login Instead!
            </Button>
          </>
        )
          
        }


      </Paper>

    </Container>
    </div>
  )
}

export default Login