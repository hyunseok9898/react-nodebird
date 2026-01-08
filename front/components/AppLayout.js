import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput();
  const me = useSelector((state) => state.user.me);
  const router = useRouter();

  const onSearch = useCallback(() => {
    router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const items = [
    {
      key: "home",
      label: <Link href="/">노드버드</Link>,
    },
    {
      key: "profile",
      label: <Link href="/profile">프로필</Link>,
    },
    {
      key: "search",
      label: (
        <Input.Search
          enterButton
          value={searchInput}
          onChange={onChangeSearchInput}
          onSearch={onSearch}
        />
      ),
    },
  ];

  return (
    <div>
      <Menu mode="horizontal" items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://my-portfolio-kappa-beryl-24.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by hyunseok
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
