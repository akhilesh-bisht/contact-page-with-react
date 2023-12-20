import Button from "./button";
import styles from "./form.module.css";
const Form = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" />
          <Button text="VIA CALL" />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" />
        <form>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
        </form>
        <form>
          <div className={styles.form_container}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="" />
          </div>
        </form>
        <form>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea
              style={{ backgroundColor: "transparent" }}
              name=""
              id=""
              cols="10"
              rows="10"
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "12px",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/image/bg.png" alt="" />
      </div>
    </section>
  );
};
export default Form;
