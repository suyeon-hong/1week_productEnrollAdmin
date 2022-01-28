import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Table = ({ thead, children }) => {
  return (
    <S.TableWrapper>
      <S.TableHead>
        <tr>
          <th colSpan={2}>{thead}</th>
        </tr>
      </S.TableHead>

      {
        <tbody>
          {React.Children.count(children) ? (
            children
          ) : (
            <tr>
              <S.AlertText>
                <span>옵션 세트를 추가하여 옵션을 구성해 주세요.</span>
              </S.AlertText>
            </tr>
          )}
        </tbody>
      }
    </S.TableWrapper>
  )
}

Table.propTypes = {
  thead: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default Table
