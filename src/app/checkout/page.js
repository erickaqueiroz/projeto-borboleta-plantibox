"use client";
import { useState } from "react";
import Header from "../../componentes/Header";
import Link from "next/link";
import styles from "./checkout.module.css";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cartao");
  const [selectedPlanId, setSelectedPlanId] = useState(2);

  const plansData = [
    { 
      id: 1, 
      name: "Starter", 
      price: "R$ 19,90/mês", 
      features: ["1 mini-planta por mês", "Vaso decorativo simples", "Acesso ao App Guia"],
      icon: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7,11.5 7,11.5C7,11.5 14,8 17,8Z" />
          </svg>
        </div>
      )
    },
    { 
      id: 2, 
      name: "Nature Lover (Mais Popular)", 
      price: "R$ 29,90/mês", 
      features: ["2 mini-plantas por mês", "Vasos decorativos premium", "Acesso total ao App Guia", "Brinde surpresa"],
      icon: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
            <path d="M12 3c0 0-4 4-4 8 0 2 1 4 2 5v5h4v-5c1-1 2-3 2-5 0-4-4-8-4-8zm-5 7c0 0-3 3-3 6 0 1 .5 2 1 3v2h2v-2c.5-1 1-2 1-3 0-3-3-6-3-6zm10 0c0 0 3 3 3 6 0 1-.5 2-1 3v2h-2v-2c-.5-1-1-2-1-3 0-3 3-6 3-6z" />
          </svg>
        </div>
      )
    },
    { 
      id: 3, 
      name: "Jungle Master", 
      price: "R$ 59,90/mês", 
      features: ["3 mini-plantas por mês", "Vasos premium + suporte", "Acesso total ao App Guia", "2 brindes surpresa"],
      icon: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--verde-escuro)" style={{marginBottom: '1rem'}}>
            <path d="M12 2L2 16h4v6h12v-6h4L12 2z" />
          </svg>
        </div>
      )
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.main}>
        <section id="planos" className={styles.section} style={{ backgroundColor: 'transparent' }}>
            <h2 className={styles.title}>Escolha seu plano</h2>
            
            <div className={styles.planosGrid}>
              {plansData.map(plan => {
                const isSelected = selectedPlanId === plan.id;

                return (
                  <article 
                    key={plan.id}
                    className={styles.planCard}
                    style={{
                      transition: 'all 0.3s ease',
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: isSelected ? '0 15px 35px rgba(46, 125, 50, 0.2)' : '0 4px 10px rgba(0,0,0,0.05)',
                      border: isSelected ? '2px solid var(--verde-principal)' : '2px solid transparent',
                      opacity: isSelected ? 1 : 0.8,
                      zIndex: isSelected ? 10 : 1,
                      backgroundColor: 'var(--branco)',
                      borderRadius: '12px',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                      {plan.icon}
                      <h3>{plan.name}</h3>
                      <p>{plan.price}</p>
                      <ul>
                          {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
                      </ul>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedPlanId(plan.id);
                        }}
                        className={styles.selectBtn} 
                        style={isSelected ? { backgroundColor: 'var(--verde-principal)', color: 'var(--branco)', border: 'none', padding: '1rem', width: '100%', borderRadius: '30px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' } : { backgroundColor: 'transparent', color: 'var(--verde-principal)', border: '2px solid var(--verde-principal)', padding: '1rem', width: '100%', borderRadius: '30px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
                      >
                        {isSelected ? 'Selecionado' : 'Selecionar'}
                      </button>
                  </article>
                );
              })}
            </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Finalize sua assinatura</h2>
          
          <form id="formulario" className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
            
            <div className={styles.fieldset}>
              <h3 className={styles.legend}>Dados Pessoais</h3>
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Nome Completo</label>
                  <input type="text" className={styles.input} placeholder="Seu nome" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>E-mail</label>
                  <input type="email" className={styles.input} placeholder="seu@email.com" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>CPF</label>
                  <input type="text" className={styles.input} placeholder="000.000.000-00" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Telefone</label>
                  <input type="tel" className={styles.input} placeholder="(00) 00000-0000" />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Endereço de Entrega</label>
                  <input type="text" className={styles.input} placeholder="Rua, Número, Bairro, Cidade - UF" />
                </div>
              </div>
            </div>

            <div className={styles.fieldset}>
              <h3 className={styles.legend}>Forma de Pagamento</h3>
              
              <div className={styles.paymentOptions}>
                <button 
                  type="button" 
                  className={paymentMethod === 'pix' ? styles.paymentBtnActive : styles.paymentBtn}
                  onClick={() => setPaymentMethod('pix')}
                >
                  Pix
                </button>
                <button 
                  type="button" 
                  className={paymentMethod === 'cartao' ? styles.paymentBtnActive : styles.paymentBtn}
                  onClick={() => setPaymentMethod('cartao')}
                >
                  Cartão de Crédito
                </button>
              </div>

              {paymentMethod === 'cartao' ? (
                <div className={styles.grid}>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Número do Cartão</label>
                    <input type="text" className={styles.input} placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Nome no Cartão</label>
                    <input type="text" className={styles.input} placeholder="Nome impresso" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Validade</label>
                    <input type="text" className={styles.input} placeholder="MM/AA" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>CVV</label>
                    <input type="text" className={styles.input} placeholder="123" />
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--texto-claro)' }}>
                  <p>O QR Code do Pix será gerado na próxima etapa após confirmar o plano.</p>
                </div>
              )}
            </div>

            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.confirmButton}>
                Confirmar Plano
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <p>Reconectando pessoas e natureza, uma planta por vez.</p>
        <nav>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
        </nav>
        <p>&copy; 2026 PlantiBox. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
