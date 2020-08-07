import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutlined } from '@ant-design/icons';
import { Divider, List, Typography, Spin } from 'antd';
import queries from '../api/index';
import { RootStore } from '../redux/store';
import { fetchUsers } from '../redux/actions/users';
import ListHeader from './ListHeader';

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
`;
const ItemText = styled(Typography.Text)`
  margin-right: 8px;
`;

interface Props {}

const ListUsers = (props: Props) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootStore) => state.reducerAuth);
  const { users, isLoading } = useSelector(
    (state: RootStore) => state.reducerUsers
  );

  React.useEffect(() => {
    dispatch(fetchUsers(token!));
  }, []);

  const handleDeleteUser = async (id: number) => {
    await queries.deleteUserApi(token!, id);
    await dispatch(fetchUsers(token!));
  };

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <Wrapper>
          <Divider orientation="left">List users</Divider>
          <List
            header={<ListHeader />}
            bordered
            dataSource={users}
            renderItem={(user: any) => (
              <List.Item>
                <div>
                  <ItemText>{user.id}</ItemText>
                  <ItemText>{user.username}</ItemText>
                </div>
                <div>
                  <DeleteOutlined onClick={() => handleDeleteUser(user.id)} />
                </div>
              </List.Item>
            )}
          />
        </Wrapper>
      )}
    </>
  );
};

export default ListUsers;
