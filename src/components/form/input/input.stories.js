import Input from './Input'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/From/Input',
  component: Input,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A98',
    },
  },
  argTypes: {
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    <Input {...args} />
  </div>
)

/* input Email -------------------------------------------------------------- */

export const EmailNormalInput = Template.bind({})
EmailNormalInput.args = {
  id: 'userEmail',
  type: 'email',
  label: '이메일 주소',
  errorMessege: '정확한 이메일 주소를 입력하세요.',
}
EmailNormalInput.storyName = '이메일 인풋(normal, right)'

export const EmailValidInput = Template.bind({})
EmailValidInput.args = {
  ...EmailNormalInput.args,
  valid: true,
  initialValue: 'nana@gamil.com',
}
EmailValidInput.storyName = '이메일 인풋(valid, right)'

export const EmailInvalidInput = Template.bind({})
EmailInvalidInput.args = {
  ...EmailNormalInput.args,
  invalid: true,
  initialValue: 'nana',
}
EmailInvalidInput.storyName = '이메일 인풋(invalid, right)'

/* input Email and Phone ---------------------------------------------------- */

export const EmailAndPhoneNormalInput = Template.bind({})
EmailAndPhoneNormalInput.args = {
  id: 'userEmailAndPhone',
  type: 'text',
  label: '이메일 주소 또는 폰 번호',
  errorMessege: '정확한 이메일 주소 또는 폰 번호를 입력하세요.',
  darkmode: true,
}
EmailAndPhoneNormalInput.storyName = '이메일/폰 인풋(normal, dark)'

export const EmailAndPhoneValidInput = Template.bind({})
EmailAndPhoneValidInput.args = {
  ...EmailAndPhoneNormalInput.args,
  valid: true,
  initialValue: 'nana@gamil.com',
}
EmailAndPhoneValidInput.storyName = '이메일/폰 인풋(valid, dark)'
export const EmailAndPhoneInvalidInput = Template.bind({})
EmailAndPhoneInvalidInput.args = {
  ...EmailAndPhoneNormalInput.args,
  invalid: true,
  initialValue: 'nana',
}
EmailAndPhoneInvalidInput.storyName = '이메일/폰 인풋(invalid, dark)'

/* input password ----------------------------------------------------------- */

export const PasswordNormalInput = Template.bind({})
PasswordNormalInput.args = {
  id: 'userPassword',
  type: 'password',
  label: '비밀번호',
  minLength: 4,
  maxLength: 60,
  errorMessege: '비밀번호는 4 - 60자 사이여야 합니다.',
  darkmode: true,
}
PasswordNormalInput.storyName = '비밀번호 인풋(normal, dark)'

export const PasswordValidInput = Template.bind({})
PasswordValidInput.args = {
  ...PasswordNormalInput.args,
  valid: true,
  initialValue: '4732894242',
}
PasswordValidInput.storyName = '비밀번호 인풋(valid, dark)'
export const PasswordInvalidInput = Template.bind({})
PasswordInvalidInput.args = {
  ...PasswordNormalInput.args,
  invalid: true,
  initialValue: '432',
}
PasswordInvalidInput.storyName = '비밀번호 인풋(invalid, dark)'
