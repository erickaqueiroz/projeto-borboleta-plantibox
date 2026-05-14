import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";

export const metadata = {
  title: "Login | PlantiBox",
  description: "Faça login na sua conta PlantiBox.",
};

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/assets/logoplanticaixa.jpeg" 
              alt="Logo ícone" 
              width={50} 
              height={50} 
              style={{ objectFit: 'contain' }}
            />
            <Image 
              src="/assets/logoplantiescrito.jpeg" 
              alt="Logo Plantibox" 
              width={120} 
              height={40} 
              style={{ objectFit: 'contain', marginLeft: '10px' }}
            />
          </Link>
        </div>
        
        <h1 className={styles.title}>Bem-vindo de volta!</h1>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>E-mail</label>
            <input 
              type="email" 
              id="email" 
              className={styles.input} 
              placeholder="seu@email.com" 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Senha</label>
            <input 
              type="password" 
              id="password" 
              className={styles.input} 
              placeholder="••••••••" 
              required 
            />
          </div>
          
          <button type="submit" className={styles.button}>
            Entrar
          </button>
          
          <button type="button" className={styles.buttonSecondary}>
            Quero criar minha conta
          </button>
        </form>
        
        <Link href="/" className={styles.backLink}>
          &larr; Voltar para o início
        </Link>
      </div>
    </div>
  );
}
