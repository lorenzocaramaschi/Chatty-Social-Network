import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        height={size}
        width={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
