import { useEffect, useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const CookieBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = () => {
    // Lógica para almacenar la preferencia del usuario sobre las cookies
    setCookiesAccepted(true);
    setShowModal(false);
  };

  const handleRejectCookies = () => {
    // Lógica para almacenar la preferencia del usuario sobre las cookies
    setCookiesAccepted(false);
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      size="small"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
      }}
    >
      <Modal.Content>
        <p>
          Este sitio web utiliza cookies para ofrecerte una mejor experiencia de
          usuario.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" className={"flex"} onClick={handleAcceptCookies}>
          Aceptar cookies
        </Button>
        <Button color="grey" className={"flex"} onClick={handleRejectCookies}>
          Rechazar cookies
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default function DynamicCookieBanner() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? <CookieBanner /> : null;
}
