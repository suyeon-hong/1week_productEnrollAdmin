import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Table = ({ className, thead, children }) => {
  return (
    <S.TableWrapper className={className}>
      <S.TableHead>
        <tr>
          <th colSpan={2}>{thead}</th>
        </tr>
      </S.TableHead>

      {
        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
        </tbody>
      }
    </S.TableWrapper>
  )
}

Table.propTypes = {
  className: PropTypes.string,
  thead: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default Table
