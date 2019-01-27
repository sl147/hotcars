<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://www.artargus.in.ua/insurancePlugin
 * @since      1.0.0
 *
 * @package    HOTCARSUSA
 * @subpackage HOTCARSUSA/public/partials
 */
?>

<div id="HOTCARSUSA_vue">
	<div class="control-btns">
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<label for="locAuto" class="calc__label">Штат где расположено ТС</label>
					<select class="calc__item" v-model="locAuto">
						<option v-for="option in locationAuto" :value="option.id">
							{{ option.name }}
						</option>
					</select>  
				</div> 
				<div class="col-sm-4">
					<label for="typeAuto" class="calc__label">Тип ТС</label>
					<select class="calc__item" v-model="typeAuto">
						<option v-for="option in typesOfAuto" :value="option.value">
							{{ option.name }}
						</option>
					</select>  
				</div>   
				<div class="col-sm-4">
					<label for="engineType" class="calc__label">Тип двигателя</label>
					<select class="calc__item" v-model="engineType">
						<option v-for="option in engineTypes" :value="option.value">
							{{ option.name }}
						</option>
					</select> 
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<label for="autoPrice" class="calc__label">Цена покупки на аукционе</label>
					<input v-model="autoPrice" class="calc__item" placeholder="Например, 1500" required>
				</div>
				<div class="col-sm-4">
					<label for="auction" class="calc__label">Аукцион</label>
					<select class="calc__item" v-model="auction">
						<option v-for="option in typesOfAuction" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
				<div class="col-sm-4">
					<label for="wayInsurance" class="calc__label">Страховка в пути</label>
					<select class="calc__item" v-model="wayInsurance">
						<option v-for="option in typesOfWayInsurance" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<label for="autoAge" class="calc__label">Год выпуска</label>
					<select class="calc__item" v-model="autoAge">
						<option v-for="option in autoAges" :value="option.id">
							{{ option.name }}
						</option>
					</select>
				</div>
				<div class="col-sm-4 hide-e">
					<label for="engineСapacity" class="calc__label">Объем, см<sup>3</sup></label>
					<input v-model="engineСapacity" placeholder="Например, 2000" class="calc__item" required>
				</div>
				<div class="col-sm-4 hide-e">
					<label for="customsBroker" class="calc__label">Таможенный брокер</label>
					<select class="calc__item" v-model="customsBroker">
						<option v-for="option in brokers" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<label for="deliveryInUkraine" class="calc__label">Доставка по Украине</label>
					<select class="calc__item" v-model="deliveryInUkraine">
						<option v-for="option in towns" :value="option.id">
							{{ option.name }}
						</option>
					</select>
				</div>
				<div class="col-sm-4 hide-e">
					<label for="certification" class="calc__label">Сертификация</label>
					<select class="calc__item" v-model="certification">
						<option v-for="option in certifications" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-offset-4 col-sm-4 wrap__btn">
					<?php if ($sljar_param == '1') :?>
					<div style="margin-top: 5px;"></div>
					<?php endif; ?>					
					<a href="#sl_total">
						<button class="doCalc calc__item">						
								<i class="fa fa-calculator"></i>
								 Рассчитать
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
	<?php if ($sljar_param == '1') :?>
	<div style="margin-top: 70px;"></div>
	<?php endif; ?>
	<div class="container">
		<div class="row">
			<div class="wrap__results col-md-12">
				<p class="priceUSA results__itm">Стоимость авто в США: <span class="price">{{ autoPrice }} $</span></p>
				<div v-show="auction==1">
					<p class=" results__itm">
						Комиссия аукциона: 
						<a style="font-weight: bold;" href="https://www.copart.com/ru/Content/US/ru/Basic-Member-Fees" rel="nofollow" target="_blank">
							Copart.com
						</a>
						<span class="price">{{ auctionCommission }} $</span>
					</p>
				</div>
				<div v-show="auction==2">
					<p class=" results__itm">
						Комиссия аукциона: 
						<a style="font-weight: bold;" href="https://www.iaai.com/Documents/IAAPublicBuyerFees.pdf" rel="nofollow" target="_blank">
							IAA Public Buyer Fees
						</a>
						<span class="price">{{ auctionCommission }} $</span>
					</p>
				</div>
				<p class="location results__itm">
					Стоимость доставки из штата <span class="location-name">{{ stateFrom }}</span>
					в порт <span class="location-name">{{ portTo }}</span>
					<span class="price">{{ priceToPort }} $</span>
				</p>
				<p class="nds results__itm">Отправка документов авиа почтой: 
					<span class="price">{{ aviaPost }} $</span>
				</p>
				<p class="results__itm">
					Морской фрахт из порта <span class="location-name">{{ portTo }}</span>
					в порт <span class="location-name">Одесса:</span>
					<span class="price">{{ seaFreight }} $</span>
				</p>
				<p class="cnt results__itm">Стоимость одного места в контейнере 
					<span class="price">{{ costOnePlaceInConteiner }} $</span>
				</p> 
				<p id="sl_total" class="cnt results__itm">Страховка в пути: 
					<span class="price">{{ costInsurance }} $</span>
				</p> 
				<p class="cnt results__itm">Экспедирование порт Одесса: 
					<span class="price">{{ excortToOdessa }} $</span>
				</p>       
				<p class="cnt results__itm">Услуги таможенного брокера: 
					<span class="price">{{ customsBroker }} $</span>
				</p> 
				<p class="poshlina results__itm">Пошлина (легковой-10%   грузовой-5%): 
					<span class="price">{{ duty }} $</span>
				</p>
				<p class="akz results__itm">Акциз: 
					<span class="price">{{ excise }} $</span>
				</p>
				<p class="nds results__itm">НДС: 
					<span class="price">{{ vat }} $</span>
				</p>
				<p class="nds results__itm">Доставка до города 
					<span class="price">{{ deliveryToTown }} $</span>
				</p>
				<p class="service-ht results__itm">Услуги компании HOT CARS: 
					<span class="price">{{ selfService }} $</span>
				</p>
				<p class="nds results__itm">Сертификация: 
					<span class="price">{{ certification }} $</span>
				</p>           
				<p class="nds results__itm">Итого:: 
					<span class="price">{{ total }} $</span>
				</p>
			</div>
			<div class=" col-md-12">
				<div class="control-btns">
					<button class="print-btn1 control-btns__itm"><i class="fa fa-print"></i> Распечатать</button>
					<button class="calc_cb control-btns__itm"><i class="fa fa-phone"></i> Получить консультацию</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	( function ($) {
		$(document).ready(function() {
			$('.print-btn1').on('click', function() {
				window.print();
			});
		})
	}) (jQuery);
</script>