import { Box, Button, Input } from '@components/base'
import theme from '@style/theme'
import * as S from '../Style'

const AddOptionRow = () => {
  return (
    <S.Row className="flexRow indent">
      <Input
        width="50%"
        placeholder="추가 옵션명 (필수)"
        required
        style={{ marginRight: theme.table.innerPadding }}
      />
      <S.Inline style={{ marginRight: theme.table.padding, flexGrow: 1 }}>
        <Input placeholder="추가 옵션명 정상가(필수)" required /> 원
      </S.Inline>
      <Button
        width={50}
        height={30}
        border={theme.color.red}
        color={theme.color.red}
      >
        삭제
      </Button>
    </S.Row>
  )
}

export default AddOptionRow
