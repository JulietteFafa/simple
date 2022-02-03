import Form from "./Form";

const StepTwo = () => {
  return (
    <div>
      {handlePassword !== handlePasswordConf && (
        <p>Vos deux mots de passe ne sont identiques</p>
      )}
    </div>
  );
};

export default StepTwo;
