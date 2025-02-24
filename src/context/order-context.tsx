import { createContext, ReactNode, useContext, useState } from "react";
import Order from "../components/order";
import { useLocalStorage } from "../hooks/use-local-storage";

type OrderProviderProps = {
  children: ReactNode;
};

type OrderItem = {
  id: number;
  quantity: number;
};

type OrderContext = {
  openOrder: () => void;
  closeOrder: () => void;
  getItemQuantity: (id: number) => number;
  increaseOrderQuantity: (id: number) => void;
  decreaseOrderQuantity: (id: number) => void;
  removeFromOrder: (id: number) => void;
  orderQuantity: number;
  orderItems: OrderItem[];
};

const OrderContext = createContext({} as OrderContext);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [orderItems, setOrderItems] = useLocalStorage<OrderItem[]>("order", []);

  const openOrder = () => setIsOpen(true);
  const closeOrder = () => setIsOpen(false);

  const orderQuantity = orderItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return orderItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseOrderQuantity(id: number) {
    setOrderItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseOrderQuantity(id: number) {
    setOrderItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromOrder(id: number) {
    setOrderItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <OrderContext.Provider
      value={{
        getItemQuantity,
        increaseOrderQuantity,
        decreaseOrderQuantity,
        removeFromOrder,
        orderQuantity,
        orderItems,
        openOrder,
        closeOrder,
      }}
    >
      {children}
      <Order isOpen={isOpen} />
    </OrderContext.Provider>
  );
}
