import React from 'react'
import {
  Center,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

function Login() {
  //react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  //handle login
  const handleLogin = (input) => {
    console.info(input)
  }

  return (
    <Center
      backgroundColor={'teal.500'}
      color="white"
      minH={'100vh'}
      flexDirection="column"
      gap={'4'}
    >
      <Heading>Login page</Heading>

      <form action="" autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            {...register('email', {
              required: { value: true, message: 'email harus diisi' },
              pattern: {
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/,
                message: 'email kurang lengkap'
              }
            })}
          />
          {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="password">password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={'password'}
              {...register('password', {
                required: { value: true, message: 'password harus diisi' },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: 'Minimum eight characters, at least one letter and one number'
                }
              })}
            />
            <InputRightElement children={<> o </>} />
          </InputGroup>
          {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
        </FormControl>

        <Button bg={'white'} color={'teal'} type={'submit'}>
          Hello
        </Button>
      </form>
    </Center>
  )
}

export default Login
