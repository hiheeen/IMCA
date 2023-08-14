import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from '@chakra-ui/react';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 로그인 실패시 모달창으로 알람
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    // 기본 폼 제출 동작 막음(새로고침)
    try {
      const response = await axios.post('서버로그인API주소', { id, password });

      if (response.status === 200) {
        //로그인 성공시
        navigate('/');
      } else {
        //로그인 실패시
        setIsModalOpen(true);
      }
    } catch (error) {
      console.log('Error during login', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //모달 닫기

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.login_wrapper}>
          <div className={styles.login_header}>IMCA</div>
          <form onSubmit={onSubmit} className={styles.login_item}>
            <div className={styles.login_id}>
              <FontAwesomeIcon icon={faUser} />
              <input
                className={styles.user}
                type="text"
                name="id"
                value={id}
                placeholder="아이디"
                required
                onChange={onChange}
              />
            </div>

            <div className={styles.login_pw}>
              <FontAwesomeIcon icon={faLock} />
              <input
                className={styles.user}
                type="password"
                name="password"
                value={password}
                placeholder="비밀번호"
                required
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              value="로그인"
              className={styles.btn_signup}
              onSubmit={onSubmit}
            >
              로그인
            </button>
          </form>
          <Modal
            isOpen={isModalOpen}
            message="로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요."
            onClose={closeModal}
          />
          <section className={styles.btn}>
            <div className={styles.btn_join}>
              <div>
                <FontAwesomeIcon icon={faHandPointDown} />
              </div>
              <div> IMCA회원이 아니시라면 </div>
              <div>
                <FontAwesomeIcon icon={faHandPointDown} />
              </div>
            </div>
            <button
              onClick={() => navigate('/signup')}
              className={styles.btn_signup}
            >
              회원가입
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
