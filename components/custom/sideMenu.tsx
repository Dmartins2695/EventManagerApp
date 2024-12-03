import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer'
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import { Divider } from '@/components/ui/divider'
import { Pressable } from '@/components/ui/pressable'
import { Icon } from '@/components/ui/icon'
import { LogOut, Settings, User } from 'lucide-react-native'

interface SideMenuProps {
  open: boolean
  setOpen: (arg0: boolean) => void
}

export const SideMenu = (props: SideMenuProps) => {
  const { open, setOpen } = props
  return (
    <Drawer
      className={'bg-background'}
      isOpen={open}
      onClose={() => {
        setOpen(false)
      }}>
      <DrawerBackdrop className={''} />
      <DrawerContent className="w-[270px] md:w-[300px]">
        <DrawerHeader className="justify-center flex-col gap-2">
          <Avatar size="2xl">
            <AvatarFallbackText>User Image</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />
          </Avatar>
          <VStack className="justify-center items-center">
            <Text className={'text-typography'} size="lg">
              User Name
            </Text>
            <Text className={'text-typography'} size="sm">
              abc@gmail.com
            </Text>
          </VStack>
        </DrawerHeader>
        <Divider className="my-4 bg-primary-100" />
        <DrawerBody contentContainerClassName="gap-2">
          <Pressable className="gap-3 flex-row items-center hover:bg-primary-50 p-2 rounded-md">
            <Icon as={User} size="lg" className="stroke-primary-700" />
            <Text className={'text-typography'}>My Profile</Text>
          </Pressable>
          <Pressable className="gap-3 flex-row items-center hover:bg-primary-50 p-2 rounded-md">
            <Icon as={Settings} size="lg" className="stroke-primary-700" />
            <Text className={'text-typography'}>Settings</Text>
          </Pressable>
          {/*maybe my groups, event, so on*/}
        </DrawerBody>
        <DrawerFooter>
          <Button
            className="w-full gap-2"
            variant="solid"
            action="primary"
            onPress={() => setOpen(false)}>
            <ButtonIcon as={LogOut} className={'stroke-secondary-300'} />
            <ButtonText className={'text-typography-contrast'}>
              Logout
            </ButtonText>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
