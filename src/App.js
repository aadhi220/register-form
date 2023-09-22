import "./App.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [perror, setPerror] = useState(false);
  const [pserror, setPserror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [showPassword,setShowPassword] =useState(false);
  
  
  const getDetails = (e) => {
    e.preventDefault();
    if (user && email && pass && cpass && pass===cpass) {
      alert(`    Name          : ${user} 
      email         : ${email}
      password  : ${cpass}`);
    } else {
      alert("please fill completely!!");
    }
  }
  const confirmPass = (e) => {
    const { value } = e.target;

    if (value === pass) {
      setPerror(false);
      setCpass(value);
    } else {
      setPerror(true);
      setCpass(value);
    }
  };

  const validatePass = (e) => {
    const { value } = e.target;
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      setPserror(false);
      setPass(value);
    } else {
      setPserror(true);
      setPass(value);
    }
  };

  const validateEmail = (e) => {
    const { value } = e.target;
    if (value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
      setEmailerror(false);
      setEmail(value);
    } else {
      setEmailerror(true);
      setEmail(value);
    }
  };


    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    
    };
  return (
    <div className="container">
      <form className="form" onSubmit={getDetails}>
        <div className="logo"><img src="https://e7.pngegg.com/pngimages/518/320/png-clipart-computer-icons-mobile-app-development-android-my-account-icon-blue-text.png" alt="" /></div>
        <span className="head">Sign-up</span>
        <p className="head-t">Hai, please enter your details</p>
        {/* <hr className='hr-line'/> */}

        <div className="input-field">
          <TextField
            type="text"
            value={user || ""}
            onChange={(e) => setUser(e.target.value)}
            
            label="Name"
            variant="standard"
          />
          <TextField
            type="email"
            
            
            value={email || ""}
            onChange={(e) => validateEmail(e)}
            label="Email"
            error={emailerror ? true : false}
            variant="standard"
          />
    

<FormControl sx={{ }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={pass || ""}
            error={pserror ? true : false}
            onChange={(e) => validatePass(e)}
      
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
      {pserror && <FormHelperText id="outlined-weight-helper-text">password should be atleast 8 characters and should contain an uppercase,lowercase and numbers</FormHelperText>}
        </FormControl>
      
           <FormControl sx={{  }} variant="standard">
          <InputLabel htmlFor="standard-adornment-cpassword">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-cpassword"
            type={showPassword ? 'text' : 'password'}
            value={cpass || ""}
            error={perror ? true : false}
            onChange={(e) => confirmPass(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          <Button
            type="submit"
            disabled={pserror || emailerror || perror ? true : false}
            variant="contained"
          >
            Sign up
          </Button>
          <p className="end">
            Have an Account? <a style={{textDecoration:'none',color:'blue'}} href="#">Login in</a>
            
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
