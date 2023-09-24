import CalculatorHeader from './CalculatorHeader'
import { Button, Badge, Checkbox, Tag} from 'antd'
import { CartIcon } from '@/utils/buttonIcons'
import styles from '../../../styles/posCalculator/pos.calculator.module.scss'
import anemitiesStyle from '../../../styles/anemities/anemities.module.scss'


export default function PosCalculator() {
    return (
        <section className={styles.calculatorWrapper}>
            <div className={styles.mainContainer}>
                <CalculatorHeader />

                <ul className={`${styles.calculatorItems} ${anemitiesStyle.overflowScroll}`}>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                    <li>
                        <Checkbox />
                        <p className={styles.middle}>
                            Panadol <br />
                            <span>1 Packet</span>
                        </p>
                        <p className={styles.price}>100 <span>Rs</span></p>
                    </li>
                   
                </ul>
                <div className={styles.footer}>
                    <Button size='large' className={styles.checkoutBtn}>
                        <CartIcon /> {"   "} Checkout & Confirm
                        <Badge style={{color :'#008080'}} color='#fff' size="default" count={5}>
                        </Badge>
                    </Button>
                    <p className={styles.clearAll}>Clear All</p>
                </div>
            </div>
        </section>
    )
}