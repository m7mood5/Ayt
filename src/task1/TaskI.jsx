import { styled, css } from "styled-components";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import ImgList from "./Img";
const links = ["home", "test9", "test8", "test7", "test6"];

const TaskI = () => {
  const [open, setOpen] = useState(false);
  const centerElements = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section className="py-4 container ">
      <div className="row justify-contant-center">
        <Container1>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid xs={12} lg={7} >
                <motion.div
                  initial={{ opacity: 0, y: -180 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.4,
                  }}
                  className='header'
                >
                  <NCon>
                    <Logo>
                      <NavLink to="/">
                        <Photo src="/public/Vector.png" />
                        <Typography
                          variant="h4"
                          noWrap
                          sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                          }}
                        >
                          AYT
                        </Typography>
                      </NavLink>
                      <HamburgerBtnConatiner
                        style={centerElements}
                        onClick={() => setOpen(!open)}
                      >
                        <HamburgerBtn open={open} />
                      </HamburgerBtnConatiner>
                    </Logo>
                    {open && (
                      <Navv style={centerElements}>
                        <Menu style={centerElements}>
                          {links.map((link) => (
                            <MenuList key={link}>
                              <Link
                                to="/"
                                onClick={() => setOpen(false)}
                              >
                                {link}
                              </Link>
                            </MenuList>
                          ))}
                        </Menu>
                      </Navv>
                    )}
                  </NCon>
                </motion.div>

                <Typography
                  display='inline'
                  variant='h4'
                  color='textPrimary'
                  sx={{
                    fontWeight: { xs: '500', sm: '700', lg: '800' },
                    fontSize: {
                      xs: 'h6.fontSize',
                      sm: 'h5.fontSize',
                      lg: 'h2.fontSize',
                    },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 1,
                      delay: 0.4,
                    }}
                  >
                    <span>Be <br /> Creative<br /> Every Day</span>
                  </motion.div>
                </Typography>

                <Pra>
                  Explore your creativitywith thousands of<br />
                  inspiring classes in design,interface
                </Pra>

                <ButonContainer>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid lg={6}>
                      <Buton1>
                        Try for free
                      </Buton1>
                    </Grid>
                    <Grid lg={6}>
                      <Buton2>
                        Want to know more
                        about us?
                      </Buton2>
                    </Grid>
                  </Grid>
                </ButonContainer>
              </Grid>
              <Grid xs={12} lg={5}>
                <ImgList />
              </Grid>
            </Grid>
          </Box>
        </Container1>
      </div>
    </section>
  )
}
const Container1 = styled.div`
width: 100%;
height: 650px;
margin:50px auto ;
border-radius: 20px;
background-color: #FFF;
padding: 38px 38px 38px 38px;
@media (max-width: 768px) {
  padding: 15px;
  margin: 5px auto;
}
`;
const NCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  position: relative;
  @media (max-width: 767px) {
    padding: 30px 15px;
    gap: 15px;
    justify-content: center;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  a {
    color: var(--main-color);
    font-size: 3rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    font-family: "Monoton", cursive;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
const Photo = styled.img`
left: 7.6%;
right: 85.34%;
top: 8.04%;
bottom: 81.4%;
background: #3966FD;
transform: rotate(23.94deg);
margin: 0 5px;
`;
const HamburgerBtnConatiner = styled.div`
  cursor: pointer;
  z-index: 101;
  margin-right: 40px;
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;
const HamburgerBtn = styled.span`
  display: block;
  height: 2px;
  width: 25px;
  background-color: ${(props) => (props.open ? "transparent" : "black")};
  position: relative;
  transition: background 0.2s ease-out;
  &::after,
  &::before {
    content: "";
    background-color: blue;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
  }
  &::before {
    top: 8px;
    ${(props) =>
    props.open &&
    css`
        transform: rotate(-45deg);
        top: 0;
      `};
  }
  &::after {
    top: -8px;
    ${(props) =>
    props.open &&
    css`
        transform: rotate(45deg);
        top: 0;
      `};
  }
`;
const Pra = styled.p`
  color: #676161;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 20px 0;
`;
const ButonContainer = styled.div`
  margin:20px 0;
`
const Buton1 = styled.button`
  width: 206px;
height: 65px;
flex-shrink: 0;
background-color:#000;
color: #fff;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`
const Buton2 = styled.button`
  width: 250px;
height: 65px;
flex-shrink: 0;
background-color:transparent;
color: #3966FD;
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`
const Navv = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #111111f1;
  z-index: 100;
  animation: fade 0.3s;
`;
const Menu = styled.ul`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuList = styled.li`
  a {
    color: white;
    margin: 0 40px;
    font-size: 2rem;
    font-family: "Monoton", cursive;
    transition: all 0.3s ease;
    text-transform: capitalize;
    &:hover {
      font-size: 2.3rem;
      color: var(--main-color);
      transition: all 0.3s ease;
    }
    @media (max-width: 1200px) {
      margin: 0 20px;
    }
    @media (max-width: 992px) {
      margin: 0 10px;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

export default TaskI